    function initGoJSDiagram(nodes, links) {

      // Since 2.2 you can also author concise templates with method chaining instead of GraphObject.make
      // For details, see https://gojs.net/latest/intro/buildingObjects.html
      const $ = go.GraphObject.make;

      let myDiagram =
        new go.Diagram("right-panel",
          {
            "undoManager.isEnabled": true,
            layout: $(go.TreeLayout,
              { // this only lays out in trees nodes connected by "generalization" links
                angle: 90,
                path: go.TreePath.Source,  // links go from child to parent
                setsPortSpot: false,  // keep Spot.AllSides for link connection spot
                setsChildPortSpot: false,  // keep Spot.AllSides
                // nodes not connected by "generalization" links are laid out horizontally
                arrangement: go.TreeArrangement.Horizontal
              })
          });

      // show visibility or access as a single character at the beginning of each property or method
      function convertVisibility(v) {
        switch (v) {
          case "public": return "+";
          case "private": return "-";
          case "protected": return "#";
          case "package": return "~";
          default: return v;
        }
      }

      // the item template for properties
      let propertyTemplate =
        $(go.Panel, "Horizontal",
          // property visibility/access
          $(go.TextBlock,
            { isMultiline: false, editable: false, width: 12 },
            new go.Binding("text", "visibility", convertVisibility)),
          // property name, underlined if scope=="class" to indicate static property
          $(go.TextBlock,
            { isMultiline: false, editable: true },
            new go.Binding("text", "name").makeTwoWay(),
            new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
          // property type, if known
          $(go.TextBlock, "",
            new go.Binding("text", "type", t => t ? ": " : "")),
          $(go.TextBlock,
            { isMultiline: false, editable: true },
            new go.Binding("text", "type").makeTwoWay()),
          // property default value, if any
          $(go.TextBlock,
            { isMultiline: false, editable: false },
            new go.Binding("text", "default", s => s ? " = " + s : ""))
        );

      // the item template for methods
      var methodTemplate =
        $(go.Panel, "Horizontal",
          // method visibility/access
          $(go.TextBlock,
            { isMultiline: false, editable: false, width: 12 },
            new go.Binding("text", "visibility", convertVisibility)),
          // method name, underlined if scope=="class" to indicate static method
          $(go.TextBlock,
            { isMultiline: false, editable: true },
            new go.Binding("text", "name").makeTwoWay(),
            new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
          // method parameters
          $(go.TextBlock, "()",
            // this does not permit adding/editing/removing of parameters via inplace edits
            new go.Binding("text", "parameters", parr => {
              var s = "(";
              for (var i = 0; i < parr.length; i++) {
                var param = parr[i];
                if (i > 0) s += ", ";
                s += param.name + ": " + param.type;
              }
              return s + ")";
            })),
          // method return type, if any
          $(go.TextBlock, "",
            new go.Binding("text", "type", t => t ? ": " : "")),
          $(go.TextBlock,
            { isMultiline: false, editable: true },
            new go.Binding("text", "type").makeTwoWay())
        );

      // this simple template does not have any buttons to permit adding or
      // removing properties or methods, but it could!

        console.info(go.Node)

      myDiagram.nodeTemplate =
        $(go.Node, "Auto",
          {
            locationSpot: go.Spot.Center,
            fromSpot: go.Spot.AllSides,
            toSpot: go.Spot.AllSides
          },
          $(go.Shape, { fill: "lightyellow" }),
          $(go.Panel, "Table",
            { defaultRowSeparatorStroke: "black" },
            // header
            $(go.TextBlock,
              {
                row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
                font: "bold 12pt sans-serif",
                isMultiline: false, editable: true
              },
              new go.Binding("text", "name").makeTwoWay()),
            // properties
            $(go.TextBlock, "Properties",
              { row: 1, font: "italic 10pt sans-serif" },
              new go.Binding("visible", "visible", v => !v).ofObject("PROPERTIES")),
            $(go.Panel, "Vertical", { name: "PROPERTIES" },
              new go.Binding("itemArray", "properties"),
              {
                row: 1, margin: 3, stretch: go.Stretch.Fill,
                defaultAlignment: go.Spot.Left, background: "lightyellow",
                itemTemplate: propertyTemplate
              }
            ),
            $("PanelExpanderButton", "PROPERTIES",
              { row: 1, column: 1, alignment: go.Spot.TopRight, visible: false },
              new go.Binding("visible", "properties", arr => arr.length > 0)),
            // methods
            // $(go.TextBlock, "Methods",
            //   { row: 2, font: "italic 10pt sans-serif" },
            //   new go.Binding("visible", "visible", v => !v).ofObject("METHODS")),
            // $(go.Panel, "Vertical", { name: "METHODS" },
            //   new go.Binding("itemArray", "methods"),
            //   {
            //     row: 2, margin: 3, stretch: go.Stretch.Fill,
            //     defaultAlignment: go.Spot.Left, background: "lightyellow",
            //     itemTemplate: methodTemplate
            //   }
            // ),
            // $("PanelExpanderButton", "METHODS",
            //   { row: 2, column: 1, alignment: go.Spot.TopRight, visible: false },
            //   new go.Binding("visible", "methods", arr => arr.length > 0))
          )
        );

      function linkStyle() {
        return { isTreeLink: false, fromEndSegmentLength: 0, toEndSegmentLength: 0 };
      }

      myDiagram.linkTemplate =  // by default, "Inheritance" or "Generalization"
        $(go.Link, linkStyle(), { isTreeLink: true },
          $(go.Shape),
          $(go.Shape, { toArrow: "Triangle", fill: "white" })
        );

      myDiagram.linkTemplateMap.add("Association",
        $(go.Link, linkStyle(),
          $(go.Shape)
        ));

      myDiagram.linkTemplateMap.add("Realization",
        $(go.Link, linkStyle(),
          $(go.Shape, { strokeDashArray: [3, 2] }),
          $(go.Shape, { toArrow: "Triangle", fill: "white" })
        ));

      myDiagram.linkTemplateMap.add("Dependency",
        $(go.Link, linkStyle(),
          $(go.Shape, { strokeDashArray: [3, 2] }),
          $(go.Shape, { toArrow: "OpenTriangle" })
        ));

      myDiagram.linkTemplateMap.add("Composition",
        $(go.Link, linkStyle(),
          $(go.Shape),
          $(go.Shape, { fromArrow: "StretchedDiamond", scale: 1.3 }),
          $(go.Shape, { toArrow: "OpenTriangle" })
        ));

      myDiagram.linkTemplateMap.add("Aggregation",
        $(go.Link, linkStyle(),
          $(go.Shape),
          $(go.Shape, { fromArrow: "StretchedDiamond", fill: "white", scale: 1.3 }),
          $(go.Shape, { toArrow: "OpenTriangle" })
        ));

      // setup a few example class nodes and relationships


      let nodedata = [
        {
          key: 1,
          name: "Material",
          properties: [
            { name: "AbsorptionCoefficient", type: "Real", visibility: "public" },
            { name: "Texture", type: "String", visibility: "public" }
          ],
          methods: []
        },
      ];

      if (nodes) {
          nodedata = nodes
      }

      let nodedata1 = [
        {
          key: 1,
          name: "BankAccount",
          properties: [
            { name: "owner", type: "String", visibility: "public" },
            { name: "balance", type: "Currency", visibility: "public", default: "0" }
          ],
          methods: [
            { name: "deposit", parameters: [{ name: "amount", type: "Currency" }], visibility: "public" },
            { name: "withdraw", parameters: [{ name: "amount", type: "Currency" }], visibility: "public" }
          ]
        },
        {
          key: 11,
          name: "Person",
          properties: [
            { name: "name", type: "String", visibility: "public" },
            { name: "birth", type: "Date", visibility: "protected" }
          ],
          methods: [
            { name: "getCurrentAge", type: "int", visibility: "public" }
          ]
        },
        {
          key: 12,
          name: "Student",
          properties: [
            { name: "classes", type: "List", visibility: "public" }
          ],
          methods: [
            { name: "attend", parameters: [{ name: "class", type: "Course" }], visibility: "private" },
            { name: "sleep", visibility: "private" }
          ]
        },
        {
          key: 13,
          name: "Professor",
          properties: [
            { name: "classes", type: "List", visibility: "public" }
          ],
          methods: [
            { name: "teach", parameters: [{ name: "class", type: "Course" }], visibility: "private" }
          ]
        },
        {
          key: 14,
          name: "Course",
          properties: [
            { name: "name", type: "String", visibility: "public" },
            { name: "description", type: "String", visibility: "public" },
            { name: "professor", type: "Professor", visibility: "public" },
            { name: "location", type: "String", visibility: "public" },
            { name: "times", type: "List", visibility: "public" },
            { name: "prerequisites", type: "List", visibility: "public" },
            { name: "students", type: "List", visibility: "public" }
          ]
        }
      ];

      let linkdata = [
        { from: 12, to: 11 },
        { from: 13, to: 11 },
        { from: 14, to: 13, relationship: "Association" }
      ];

      if (links) {
          linkdata = links
      } else {
          linkdata = []
      }

      myDiagram.model = new go.GraphLinksModel({
          copiesArrays: true,
          copiesArrayObjects: true,
          linkCategoryProperty: "relationship",
          nodeDataArray: nodedata,
          linkDataArray: linkdata
      });
    }

    // window.addEventListener('DOMContentLoaded', init);
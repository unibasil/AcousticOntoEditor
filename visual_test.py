from owlready2 import *
from os import path
# import ontor

print(path.curdir)

# onto_path.append("..\\data\\")
# onto_path.append("C:\\Users\\uniba\\Documents\\Projects\\acuonto\\acuonto\\data")
onto = get_ontology("..\\data\\AcousticMethodsAndTasks.owl")
onto.load()
print(onto.base_iri)
print(onto.get_namespace(onto.base_iri))
print('* Classes')
print(*list(onto.classes()), sep="\n")
print('* Individuals')
print(*list(onto.individuals()), sep="\n")
print('* Object properties')
print(*list(onto.object_properties()), sep="\n")
print('* Data properties')
print(*list(onto.data_properties()), sep="\n")
print('* Annotation properties')
print(*list(onto.annotation_properties()), sep="\n")
# print('* Disjoints')
# print(*list(onto.disjoints()), sep="\n")

# a = onto.search(iri="*AcousticMethodsAndLang")
# print(a)

onto.save(file="../data/saved.owl")

# ontor3 = ontor.OntoEditor("", "AcousticMethodsAndTasks.owl")
# ontor3.visualize(
#     classes=["AcousticsMethods.Building"]
# )

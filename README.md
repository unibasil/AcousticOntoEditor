Редактор онтологий в сфере архитектурной акустики
=================================================

Требования
----------
В окружении, в котором будет выполняться развёртывание проекта, должны быть установлены:
* python 3.12+
* mysql server и client
* git

Установка
---------
В консоли (cmd.exe) склонировать проект c github в нужную папку:
TODO: ЗАМЕНИТЬ НА ОКОНЧАТЕЛЬНЫЙ АДРЕС РЕПОЗИТОРИЯ!
```bash
git clone https://github.com/unibasil/AcousticOntoEditor.git AcousticOntoEditor
cd AcousticOntoEditor
git checkout develop
```
Настроить venv для проекта:
```bash
python -m venv venv
```
Инициализировать venv:
```bash
.\venv\Scripts\activate.bat
```
Установить зависимости из файла `requirements.txt`:
```bash
pip install -r requirements.txt
```
Данные для подключения к MySQL серверу хранятся в файле `AcousticOntoEditor\settings.py`:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'acoustic_ontos',
        "USER": "admin",
        "PASSWORD": "admin",
        "HOST": "127.0.0.1",
        "PORT": "3306",
        "TEST": {
            "NAME": "acoustic_ontos_test",
        }
    }
}
```
На сервере необходимо создать базу с произвольным именем (указав его потом в вышеприведённых настройках в поле NAME),
а также пользователя с полными правами на эту базу, указав его данные в настройках (поля USER и PASSWORD).

Для демонстрационных целей в папке `data\acoustic_ontos_dump` находится дамп базы данных, который можно импортировать
в MySQL Workbench. В таком случае создание суперпользователя ниже можно пропустить (в дампе уже есть пользователь `admin`
c паролем `admin`).

Если демонстрационные данные не были импортированы, создать структуру таблиц в базе данных:
```bash
python manage.py migrate
```
Создать суперпользователя для доступа в административную панель:
```bash
python manage.py createsuperuser
```
Запустить сервер:
```bash
python manage.py runserver
```
Открыть в браузере страницу 127.0.0.1:8000




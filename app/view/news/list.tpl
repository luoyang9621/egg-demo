<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
    <ul>
    {% for item in list %}
        <li>
            <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
    {% endfor %}
    </ul>
</body>
</html>
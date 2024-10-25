// Questions Array (Add all 100 questions here)
const questions = [
    {
        "question": "What is the output of 5 // 2 in Python?",
        "options": ["2.5", "3", "2", "1"],
        "answer": 2
    },
    {
        "question": "Which Python keyword is used to create a function?",
        "options": ["function", "define", "def", "lambda"],
        "answer": 2
    },
    {
        "question": "Which library is used for numerical operations in Python?",
        "options": ["Flask", "NumPy", "Django", "Matplotlib"],
        "answer": 1
    },
    {
        "question": "Which Python statement is used to handle exceptions?",
        "options": ["except", "try", "catch", "finally"],
        "answer": 0
    },
    {
        "question": "What is the correct syntax to import the math module?",
        "options": ["import math()", "include math", "import math", "from math import all"],
        "answer": 2
    },
    {
        "question": "Which of the following data structures is ordered?",
        "options": ["Dictionary", "Set", "List", "All of the above"],
        "answer": 2
    },
    {
        "question": "What is the output of type(None)?",
        "options": ["<class 'none'>", "<class 'NoneType'>", "NoneType", "None"],
        "answer": 1
    },
    {
        "question": "Which keyword is used to create an anonymous function?",
        "options": ["def", "lambda", "anonymous", "func"],
        "answer": 1
    },
    {
        "question": "What does pip stand for?",
        "options": ["Package Installation Program", "Python Installer Package", "Preferred Installer Program", "Python Interactive Package"],
        "answer": 2
    },
    {
        "question": "How is memory managed in Python?",
        "options": ["Automatic garbage collection", "Manual memory allocation", "Using malloc()", "Using pointers"],
        "answer": 0
    },
    {
        "question": "Which method is used to read the first line of a file?",
        "options": ["readline()", "readlines()", "read()", "line()"],
        "answer": 0
    },
    {
        "question": "What is the output of 'hello'.upper()?",
        "options": ["HELLO", "hello", "Hello", "hELLO"],
        "answer": 0
    },
    {
        "question": "Which operator is used to concatenate two strings?",
        "options": ["+", "*", ".", "&"],
        "answer": 0
    },
    {
        "question": "What is the default value of end in the print() function?",
        "options": ["\\t", "\\n", "' '", "None"],
        "answer": 1
    },
    {
        "question": "Which method adds elements to a set?",
        "options": ["append()", "insert()", "add()", "update()"],
        "answer": 2
    },
    {
        "question": "Which Python function returns the number of items in an object?",
        "options": ["length()", "size()", "count()", "len()"],
        "answer": 3
    },
    {
        "question": "What is the result of bool([])?",
        "options": ["True", "False", "None", "Error"],
        "answer": 1
    },
    {
        "question": "Which of the following is a mutable data type?",
        "options": ["String", "List", "Tuple", "Integer"],
        "answer": 1
    },
    {
        "question": "Which keyword is used to return a value from a function?",
        "options": ["export", "return", "yield", "output"],
        "answer": 1
    },
    {
        "question": "Which built-in function is used to sort elements?",
        "options": ["sorted()", "order()", "sort()", "list_sort()"],
        "answer": 0
    },
    {
        "question": "What is the purpose of __init__ in Python?",
        "options": ["Initialize the module", "Initialize an object", "Install packages", "Initialize a variable"],
        "answer": 1
    },
    {
        "question": "Which keyword is used to define a class in Python?",
        "options": ["object", "class", "define", "struct"],
        "answer": 1
    },
    {
        "question": "Which function is used to generate random numbers in Python?",
        "options": ["rand()", "random()", "randint()", "generate()"],
        "answer": 2
    },
    {
        "question": "Which keyword is used to exit a loop prematurely?",
        "options": ["exit", "stop", "break", "terminate"],
        "answer": 2
    },
    {
        "question": "How do you install external packages in Python?",
        "options": ["import package", "python install <package>", "pip install <package>", "apt-get install python-<package>"],
        "answer": 2
    },
    {
        "question": "Which command starts a Django project?",
        "options": ["django-admin startapp", "django-admin startproject", "django-admin createproject", "python manage.py startproject"],
        "answer": 1
    },
    {
        "question": "What is the default port for Django's development server?",
        "options": ["8080", "80", "8000", "5000"],
        "answer": 2
    },
    {
        "question": "Which function is used to render an HTML template in Django?",
        "options": ["render_template()", "template()", "render()", "template_render()"],
        "answer": 2
    },
    {
        "question": "What is the purpose of Flask?",
        "options": ["Front-end framework", "Micro web framework", "Database management system", "Python library for machine learning"],
        "answer": 1
    },
    {
        "question": "Which decorator is used to create a route in Flask?",
        "options": ["@flask.route", "@route()", "@app.route()", "@url()"],
        "answer": 2
    },
    {
        "question": "Which template engine does Django use?",
        "options": ["Jinja2", "Mustache", "Django Template Language (DTL)", "EJS"],
        "answer": 2
    },
    {
        "question": "Which command runs database migrations in Django?",
        "options": ["python manage.py runmigrations", "python manage.py migrate", "django-admin migrate", "migrate"],
        "answer": 1
    },
    {
        "question": "Which ORM does Django use?",
        "options": ["SQLAlchemy", "Django ORM", "Hibernate", "Sequel"],
        "answer": 1
    },
    {
        "question": "What is the default HTTP method in a Flask route?",
        "options": ["POST", "GET", "PUT", "DELETE"],
        "answer": 1
    },
    {
        "question": "Which file contains database settings in Django?",
        "options": ["urls.py", "views.py", "models.py", "settings.py"],
        "answer": 3
    },
    {
        "question": "Which middleware ensures cross-origin resource sharing (CORS) in Django?",
        "options": ["Django-CORS-Headers", "Django-REST-Framework", "CORS-Proxy", "Flask-CORS"],
        "answer": 0
    },
    {
        "question": "Which command is used to create an app in Django?",
        "options": ["django-admin startproject", "python manage.py createapp", "python manage.py startapp", "django-admin createapp"],
        "answer": 2
    },
    {
        "question": "Which Flask method is used to return JSON data?",
        "options": ["jsonify()", "render_json()", "json_response()", "json()"],
        "answer": 0
    },
    {
        "question": "How do you connect a Django model to a database table?",
        "options": ["Using SQLAlchemy", "Using Models in models.py", "Through the Django Admin Panel", "Directly with SQL commands"],
        "answer": 1
    },
    {
        "question": "Which command collects static files in Django?",
        "options": ["python manage.py static", "python manage.py collectstatic", "django-admin static", "manage.py loadstatic"],
        "answer": 1
    },
    {
        "question": "Which command is used to create migrations in Django?",
        "options": ["django-admin makemigrations", "python manage.py makemigrations", "django-admin migrate", "python manage.py migrateapp"],
        "answer": 1
    },
    {
        "question": "Which SQL database is most commonly used with Django?",
        "options": ["MySQL", "PostgreSQL", "SQLite", "Oracle"],
        "answer": 2
    },
    {
        "question": "Which Python library is used to interact with MySQL?",
        "options": ["Psycopg2", "SQLAlchemy", "PyMySQL", "MySQLdb"],
        "answer": 2
    },
    {
        "question": "How do you define a primary key in Django?",
        "options": ["primary_key=True", "is_primary=True", "primary=True", "key=True"],
        "answer": 0
    },
    {
        "question": "What is the output of [1, 2, 3] * 2?",
        "options": ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3, 2, 4, 6]", "[1, 2, 3, 1, 2]"],
        "answer": 0
    },
    {
        "question": "Which function converts a string into a datetime object in Python?",
        "options": ["strptime()", "str2date()", "date()", "parse_date()"],
        "answer": 0
    },
    {
        "question": "How do you create a virtual environment in Python?",
        "options": ["python -m venv env", "virtualenv env", "env create", "python create venv"],
        "answer": 0
    },
    {
        "question": "What is the output of range(5)?",
        "options": ["0 to 4", "1 to 5", "0 to 5", "None"],
        "answer": 0
    },
    {
        "question": "How do you check if a key exists in a dictionary?",
        "options": ["key in dict", "dict.has_key(key)", "key.exists()", "dict.key()"],
        "answer": 0
    },
    {
        "question": "What will be the result of 'abc' + 'def'?",
        "options": ["abcdef", "abc def", "defabc", "Error"],
        "answer": 0
    },
    {
        "question": "What is the default data type of a variable in Python?",
        "options": ["Integer", "String", "Float", "None"],
        "answer": 3
    },
    {
        "question": "Which method is used to append an item to a list?",
        "options": ["add()", "insert()", "append()", "push()"],
        "answer": 2
    },
    {
        "question": "What is the purpose of the 'self' keyword in a class?",
        "options": ["Refers to the instance of the class", "Refers to the class itself", "Used for inheritance", "None of the above"],
        "answer": 0
    },
    {
        "question": "How can you create a comment in Python?",
        "options": ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
        "answer": 1
    },
    {
        "question": "Which method is used to split a string into a list?",
        "options": ["split()", "divide()", "break()", "join()"],
        "answer": 0
    },
    {
        "question": "Which of the following is not a valid variable name?",
        "options": ["my_var", "myVar", "2nd_var", "_myVar"],
        "answer": 2
    },
    {
        "question": "What is the output of the expression: (1 == True) + (1 == False)?",
        "options": ["0", "1", "2", "1.0"],
        "answer": 2
    },
    {
        "question": "Which of the following is a Python built-in data type?",
        "options": ["List", "Dictionary", "Set", "All of the above"],
        "answer": 3
    },
    {
        "question": "Which function is used to open a file in Python?",
        "options": ["open_file()", "file()", "open()", "read_file()"],
        "answer": 2
    },
    {
        "question": "How do you convert a list to a tuple in Python?",
        "options": ["tuple(list)", "list(tuple)", "convert(list)", "as_tuple(list)"],
        "answer": 0
    },
    {
        "question": "What is the return type of the range() function in Python 3?",
        "options": ["List", "Tuple", "Range object", "Set"],
        "answer": 2
    },
    {
        "question": "Which operator is used for exponentiation in Python?",
        "options": ["^", "**", "^^", "exp"],
        "answer": 1
    },
    {
        "question": "How do you define a class in Python?",
        "options": ["class MyClass:", "MyClass class:", "define MyClass:", "class: MyClass"],
        "answer": 0
    },
    {
        "question": "Which keyword is used to indicate a function that does not return any value?",
        "options": ["void", "return None", "def", "None"],
        "answer": 1
    },
    {
        "question": "What is the output of len('hello')?",
        "options": ["4", "5", "6", "Error"],
        "answer": 1
    },
    {
        "question": "What is the output of [1, 2, 3] + [4, 5]?",
        "options": ["[5, 7]", "[1, 2, 3, 4, 5]", "[1, 2, 3][4, 5]", "[1, 2, 3, 4, 5, 6]"],
        "answer": 1
    },
    {
        "question": "What will happen if you try to access a key that doesn't exist in a dictionary?",
        "options": ["Returns None", "Raises a KeyError", "Returns False", "Returns 0"],
        "answer": 1
    },
    {
        "question": "Which method is used to remove an item from a list by its value?",
        "options": ["remove()", "delete()", "discard()", "pop()"],
        "answer": 0
    },
    {
        "question": "What will be the output of 10 % 3?",
        "options": ["3", "1", "0", "10"],
        "answer": 1
    },
    {
        "question": "What does the map() function do in Python?",
        "options": ["Applies a function to every item of an iterable", "Maps a function to a list", "Returns a map object", "None of the above"],
        "answer": 0
    },
    {
        "question": "How do you create a list in Python?",
        "options": ["[]", "{}", "()", "<>"],
        "answer": 0
    },
    {
        "question": "Which of the following statements will create a tuple?",
        "options": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "1, 2, 3"],
        "answer": 0
    },
    {
        "question": "What will be the output of the following code: print(type([]) is list)?",
        "options": ["True", "False", "None", "Error"],
        "answer": 0
    },
    {
        "question": "Which of the following methods can be used to find the length of a string?",
        "options": ["size()", "count()", "len()", "length()"],
        "answer": 2
    },
    {
        "question": "What does the filter() function do?",
        "options": ["Filters elements of an iterable", "Filters data from a file", "Creates a filter for lists", "None of the above"],
        "answer": 0
    },
    {
        "question": "What is the output of the expression '2' + '2'?",
        "options": ["4", "22", "Error", "None"],
        "answer": 1
    },
    {
        "question": "What is a lambda function in Python?",
        "options": ["An anonymous function", "A regular function", "A built-in function", "A class method"],
        "answer": 0
    },
    {
        "question": "How do you create a new file in Python?",
        "options": ["open('file.txt', 'w')", "create('file.txt')", "new_file('file.txt')", "file('file.txt', 'w')"],
        "answer": 0
    },
    {
        "question": "Which of the following statements is used to define a constructor in Python?",
        "options": ["__init__()", "__new__()", "constructor()", "init()"],
        "answer": 0
    },
    {
        "question": "What is the purpose of the with statement?",
        "options": ["To handle exceptions", "To manage resources", "To create a loop", "To define a context manager"],
        "answer": 1
    },
    {
        "question": "What is the output of 2 + 3 * 5?",
        "options": ["25", "17", "15", "10"],
        "answer": 1
    },
    {
        "question": "How can you check the type of a variable in Python?",
        "options": ["type(variable)", "typeof(variable)", "checktype(variable)", "variable.type()"],
        "answer": 0
    },
    {
        "question": "What is the method to reverse a list in Python?",
        "options": ["reversed()", "reverse()", "rev()", "flip()"],
        "answer": 1
    },
    {
        "question": "What does the strip() method do?",
        "options": ["Removes whitespace", "Removes all characters", "Trims the list", "None of the above"],
        "answer": 0
    },
    {
        "question": "How do you access the first element of a list named my_list?",
        "options": ["my_list[0]", "my_list(0)", "my_list{0}", "my_list.first()"],
        "answer": 0
    },
    {
        "question": "What is the function of the 'pass' statement?",
        "options": ["Terminates a function", "Acts as a placeholder", "Exits a loop", "None of the above"],
        "answer": 1
    },
    {
        "question": "What is a docstring?",
        "options": ["Documentation string", "Description of a function", "Help for a class", "All of the above"],
        "answer": 3
    },
    {
        "question": "How do you raise an exception in Python?",
        "options": ["throw", "raise", "error", "exception"],
        "answer": 1
    },
    {
        "question": "Which operator is used for logical AND in Python?",
        "options": ["&", "and", "&&", "||"],
        "answer": 1
    },
    {
        "question": "How do you create a set in Python?",
        "options": ["{}", "[]", "()", "set()"],
        "answer": 0
    }
];

// Variables



let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let userAnswers = []; // Array to store user-selected options

// Shuffle and Load Questions
function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    showQuestion();
}

// Display Current Question and Options
function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const question = shuffledQuestions[currentQuestionIndex];

    // Set question text
    document.getElementById("question").textContent = question.question;

    // Clear old options
    optionsContainer.innerHTML = "";

    // Display new options
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");

        // Check if there is a previously selected answer
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add("selected");
        }

        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });

    // Update attempt number
    document.getElementById("attempt-number").textContent = `Attempt ${currentQuestionIndex + 1} out of ${shuffledQuestions.length}`;
}

// Check if the selected answer is correct
function checkAnswer(selectedIndex, button) {
    const question = shuffledQuestions[currentQuestionIndex];
    const correctIndex = question.answer;

    // Store the selected answer
    userAnswers[currentQuestionIndex] = selectedIndex;

    // Disable all buttons after selection
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach(btn => btn.disabled = true);

    // Mark the selected answer
    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        // Highlight the correct answer
        optionButtons[correctIndex].classList.add("correct");
    }
}

// Load Next Question or Show Result
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Display Final Score
function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    const resultContainer = document.getElementById("result-container");
    resultContainer.classList.remove("hidden");
    document.getElementById("score-display").textContent = `Your score: ${score} / ${shuffledQuestions.length}`;
}

// Confirm Restart
function confirmRestart() {
    const userConfirmed = confirm("Are you sure you want to restart the quiz?");
    if (userConfirmed) {
        location.reload();
    }
}

// Go Back to Previous Question
function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Start Quiz on Load
startQuiz();
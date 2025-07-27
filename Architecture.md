<h1>✅ Рекомендуемая структура каталогов Node.js-проекта</h1>

<pre>
		my-app/
			│
			├── src/                     # Весь исходный код
			│   ├── routes/              # Express-роуты (например, userRouter.js)
			│   ├── controllers/         # Логика обработки запросов (UserController.js)
			│   ├── services/            # Слой бизнес-логики (работа с БД, API и т.д.)
			│   ├── models/              # Модели данных (например, Mongoose или Prisma)
			│   ├── middlewares/         # Пользовательские middleware
			│   ├── validators/          # Валидация входящих данных (Joi/Zod)
			│   ├── utils/               # Утилиты (хелперы, форматтеры, генераторы)
			│   ├── config/              # Конфигурации (env, db, app settings)
			│   ├── app.js               # Конфигурация приложения Express
			│   └── server.js            # Точка запуска (создает сервер, слушает порт)
			│
			├── .env                     # Конфигурация окружения
			├── .gitignore
			├── package.json
			└── README.md
</pre>

<h2>📦 Пример на практике</h2>
<p>1. routes/userRoutes.js</p>

<pre>
		const express = require('express');
		const router = express.Router();
		const userController = require('../controllers/userController');
		router.get('/', userController.getUsers);
		router.post('/', userController.createUser);
		module.exports = router;
</pre>

<p>2. controllers/userController.js</p>
<pre>
		const userService = require('../services/userService');
		exports.getUsers = async (req, res, next) => {
			try {
				  const users = await userService.getAllUsers();
				  res.json(users)
				} catch (err) {
					next(err);
				}
			};
</pre>

<p>3. services/userService.js</p>
<pre>
		const UserModel = require('../models/UserModel');
		exports.getAllUsers = async () => {
			return UserModel.find();
		};
</pre>

<p>4. app.js</p>
<pre>
		const express = require('express');
		const app = express();
		const userRoutes = require('./routes/userRoutes');
		app.use(express.json());
		app.use('/users', userRoutes);
		module.exports = app;

</pre>

<p>5. server.js</p>
<pre>
		const app = require('./app');
		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
</pre>

import React from 'react';
import s from './welcome.module.css';
import MyPhoto from '../../assets/img/my_photo.jpeg';
const WelcomePage = () => {
	return (
		<div className={s.pageContainer}>
			<div className={s.card}>
				<div className={s.photo}>
					<img src={MyPhoto} alt='Jasur Ibraimov' />
				</div>
				<div>
					<p>Привет! Меня зовут Жасур.</p>
					<p>
						Я <span>front-end разработчик</span>. Этот проект я сделал для
						вакансии компании Квартирка.
					</p>
					<p>Как со мной можно связаться: </p>
					<ul>
						<p>Почты: </p>
						<li>
							<p>ibraimov0409@gmail.com ||</p>
							<p>ibraimov0409@mail.ru</p>
						</li>
						<p>Резюме: </p>
						<li>
							<p>
								<a href='https://career.habr.com/jasuribraimov'>
									На Карьере Хабр
								</a>
							</p>
							<p>
								<a href='https://temirtau.hh.kz/resume/2499b496ff083099500039ed1f53374d316749'>
									На HeadHunter
								</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;

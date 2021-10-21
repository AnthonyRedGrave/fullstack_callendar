collectstatic:
		cd frontend-callendar/ && npm run build && cd .. && python manage.py collectstatic && python manage.py runserver

from django.contrib import admin
from django.urls import path, include
from main.views import index, category_detail, post_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('category/<int:id>/', category_detail),
    path('post/<int:id>/', post_detail),
    path('api/', include('main.urls'))
]

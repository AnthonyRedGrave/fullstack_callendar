from main.serializers import BlogCategorySerializer
from rest_framework.routers import SimpleRouter


from .views import BlogPostViewSet, BlogCategoryViewSet

router = SimpleRouter()
router.register('post', BlogPostViewSet, basename='post')
router.register('category', BlogCategoryViewSet, basename='category')



urlpatterns = []

urlpatterns += router.urls
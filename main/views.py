from main.serializers import BlogCategorySerializer, BlogPostSerializer, BlogPostListRetrieveSerializer
from main.models import BlogCategory, BlogPost
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet


class BlogPostViewSet(ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    action_to_serializer = {
        "list": BlogPostListRetrieveSerializer,
        "retrieve": BlogPostSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(self.action, self.serializer_class)

class BlogCategoryViewSet(ModelViewSet):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer


def index(request):
    return render(request, 'index.html', {})
from main.serializers import BlogCategorySerializer, BlogPostSerializer, BlogPostListRetrieveSerializer, BlogCategoryDetailSerializer
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

    action_to_serializer = {
        "retrieve": BlogCategoryDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(self.action, self.serializer_class)


def index(request):
    return render(request, 'index.html', {})


def category_detail(request):
    return render(request, 'index.html', {} )

def post_detail(request):
    return render(request, 'index.html', {} )
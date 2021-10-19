from rest_framework import serializers
from .models import BlogCategory, BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'


class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = '__all__'


class BlogCategoryDetailSerializer(serializers.ModelSerializer):
    posts = serializers.SerializerMethodField()

    @staticmethod
    def get_posts(obj):
        return BlogPostSerializer(BlogPost.objects.filter(blog_category=obj), many=True).data

    class Meta:
        model = BlogCategory
        fields = '__all__'
    
    



class BlogPostListRetrieveSerializer(serializers.ModelSerializer):
    blog_category = BlogCategorySerializer()

    class Meta:
        model = BlogPost
        fields = '__all__'
from rest_framework import serializers
from .models import Post
# from drf_extra_fields.fields import Base64ImageField
# from drf_extra_fields.fields import Base64ImageField
# ModuleNotFoundError: No module named 'drf_extra_fields'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('__all__')

class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('caption', 'image', 'created_at')
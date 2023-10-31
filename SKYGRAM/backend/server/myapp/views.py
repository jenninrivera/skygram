from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from rest_framework import generics, status
from rest_framework.decorators import api_view
# from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PostSerializer, CreatePostSerializer
import json
from .models import Post

def home_view(request, *args, **kwargs):
    return HttpResponse("<h1>Hello</h1>")

@api_view(['GET', 'POST'])
def post_list(request):

    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class PostDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    

class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CreatePost(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = CreatePostSerializer





# def post_detail_view(request, post_id, *args, **kwargs):
#     data = {
#         "id": post_id
#     }
#     status = -1
#     try :
#         obj = Post.objects.get(id=post_id)
#         data['caption'] = obj.caption
#         status = 200
#     except:
#         data['message'] = "Not Found"
#         status = 404
#     return JsonResponse(data,status=status)


# class CreatePostSerializer(APIView):
    # serializer_class = CreatePostSerializer

    # def post(request):
    #     serializer = self.serializer_class(data=request.data)
    #     if serializer.is_valid():
    #         caption = serializer.data.get('caption')
    #         image = serializer.data.get('image')
    #         new_post = Post(caption=caption, image=image)
    #         new_post.save()

    #         return Response(PostSerializer(new_post).data, status=status.HTTP_200_OK)

    # the error i got with this code : post() takes 1 positional argument but 2 were given


    # queryset = Post.objects.all()
    # serializer_class = PostSerializer


# class PostDeleteView(generics.DestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# def add_post_view(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         new_post = Post(caption=data['caption'])
#         new_post.save()
        

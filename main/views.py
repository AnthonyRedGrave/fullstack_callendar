from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response


class TestAPIView(APIView):
    def get(self, request, *args, **kwargs):
        data = [
            {"id": 1, "name": "John"},
            {"id": 2, "name": "Oleg"}
            ]
        return Response(data)

def index(request):
    return render(request, 'index.html', {})
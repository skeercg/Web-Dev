from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def products(request):
    if request.method == 'GET':
        products = Product.objects.all()
        data = [product.to_json() for product in products]
        return JsonResponse({'products': data})

def product(request, id):
    if request.method == 'GET':
        try:
            product = Product.objects.get(pk=id)
            data = product.to_json()
            return JsonResponse({'product': data})
        except Product.DoesNotExist:
            return JsonResponse({'error': 'Product does not exist'}, status=404)

def categories(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        data = [category.to_json() for category in categories]
        return JsonResponse({'categories': data})

def category(request, id):
    if request.method == 'GET':
        try:
            category = Category.objects.get(pk=id)
            data = category.to_json()
            return JsonResponse({'category': data})
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category does not exist'}, status=404)

def category_products(request, id):
    if request.method == 'GET':
        try:
            category = Category.objects.get(pk=id)
            products = Product.objects.filter(category=category)
            data = [product.to_json() for product in products]
            return JsonResponse({'products': data})
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category does not exist'}, status=404)

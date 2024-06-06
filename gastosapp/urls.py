from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from gastosapp import views


router = routers.DefaultRouter()
router.register(r'gastos', views.GastosView, 'gastos')
#api version
urlpatterns = [
    path("api/v1/", include (router.urls)),
    path('docs/', include_docs_urls(title = "Gastos API"))
]

#esto genera por defecto y automaticamente los metodos GET  POST  PUT  DELETE para el CRUDs
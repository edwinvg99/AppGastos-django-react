from rest_framework import viewsets
from .serializer import GastosSerializer
from .models import Gastos
# Create your views here.

class GastosView(viewsets.ModelViewSet):
    serializer_class  = GastosSerializer
    queryset = Gastos.objects.all()     #un QuerySet es una colección de datos de tu base de datos que se puede filtrar, ordenar y manipular de diversas formas.

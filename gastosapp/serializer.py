from rest_framework import serializers
from .models import Gastos
class GastosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gastos
        # si quiero seleccionar los campos que quiero pasar se usa
        # fields = ('id','descripcion'... etc)
        
        # si quiero pasar todos los campos se usa...
        fields = '__all__'
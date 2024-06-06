from django.db import models

# Create your models here.
class Gastos(models.Model):
    titulo = models.CharField(max_length=50)
    descripcion = models.TextField(blank=True)
    fecha = models.DateField()
    monto = models.IntegerField()
    
    def __str__(self) -> str:
        return self.titulo
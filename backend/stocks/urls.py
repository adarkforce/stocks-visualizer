from django.urls import path

from stocks import views

urlpatterns = [
    path("infos/", views.stocks_infos, name="stocks_infos"),
    path("symbols/", views.stocks_list, name="stocks_list"),
]

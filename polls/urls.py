from django.conf.urls import url
from polls.views import UserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'users', UserViewSet)
urlpatterns = router.urls
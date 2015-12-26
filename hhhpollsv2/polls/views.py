from django.contrib.auth.models import User
from polls.serializers import ChoiceSerializer, PollSerializer, VoterSerializer, UserSerializer
from polls.models import Poll, Choice, Voter
from rest_framework import viewsets
#import django_filters
#from rest_framework import filters
#from rest_framework.response import Response
from polls.filters import PollFilter, VoterFilter, ChoiceFilter

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class ChoiceViewSet(viewsets.ModelViewSet):
    serializer_class = ChoiceSerializer
    queryset = Choice.objects.all()
    filter_class = ChoiceFilter


class PollViewSet(viewsets.ModelViewSet):
    serializer_class = PollSerializer
    queryset = Poll.objects.all()
    filter_class = PollFilter


class VoterViewSet(viewsets.ModelViewSet):
    serializer_class = VoterSerializer
    queryset = Voter.objects.all()
    filter_class = VoterFilter
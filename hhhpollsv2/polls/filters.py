from polls.models import Poll, Choice, Voter
from django.contrib.auth.models import User
import django_filters


class PollFilter(django_filters.FilterSet):
    class Meta:
        model = Poll
        fields = ('open', 'name', 'id')

class ChoiceFilter(django_filters.FilterSet):
    class Meta:
        model = Choice
        #fields = ('poll')


class VoterFilter(django_filters.FilterSet):
    class Meta:
        model = Voter
        fields = ('poll', 'user')
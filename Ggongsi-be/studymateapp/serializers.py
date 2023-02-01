from rest_framework import serializers
from studymateapp.models import UserAnswers, Question, AnswerChoice, Place

class UserAnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAnswers
        fields = ['user_id', 'name', 'studentID', 'major',
                  'answer1', 'answer2', 'answer3','answer4',
                  'answer5', 'answer6', 'answer7']

    def get_userInfo(self, obj):
        return obj.values('user_id', 'name', 'studentID', 'major')

    def get_userAnswers(self, obj):
        return obj.values('answer1', 'answer2', 'answer3', 'answer4', 'answer5', 'answer6', 'answer7')

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ['name', 'description']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['quesNum', 'questionContent']

class AnswerChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['quesNum', 'content']
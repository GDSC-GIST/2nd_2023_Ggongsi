from django.db import models
from django.contrib.auth.models import User


class Question(models.Model):
    quesNum = models.PositiveSmallIntegerField(blank=True, null=True)
    questionContent = models.CharField(max_length=300, blank=True, null=True)


class AnswerChoice(models.Model):
    quesNum = models.ForeignKey(Question, on_delete=models.CASCADE, blank=True, null=True)
    content = models.CharField(max_length=300, blank=True, null=True)


class UserAnswers(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=10)
    studentID = models.CharField(max_length=8)
    major = models.CharField(max_length=10)
    answer1 = models.PositiveSmallIntegerField(blank=True, null=True)
    answer2 = models.PositiveSmallIntegerField(blank=True, null=True)
    answer3 = models.PositiveSmallIntegerField(blank=True, null=True)
    answer4 = models.PositiveSmallIntegerField(blank=True, null=True)
    answer5 = models.PositiveSmallIntegerField(blank=True, null=True)
    answer6 = models.PositiveSmallIntegerField(blank=True, null=True)
    answer7 = models.PositiveSmallIntegerField(blank=True, null=True)
    place = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.name


class Place(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    description = models.CharField(max_length=300, blank=True, null=True)
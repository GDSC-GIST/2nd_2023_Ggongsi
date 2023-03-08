from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from studymateapp.models import UserAnswers, Question, AnswerChoice, Place
from studymateapp.serializers import UserAnswersSerializer, PlaceSerializer
from rest_framework import status
from rest_framework.response import Response
import random

@api_view(['GET'])
def isIDexist(request, studentID):
    if request.method == 'GET':
        ex = UserAnswers.objects.filter(studentID=studentID).exists
        if ex == True:
            return Response("True")
        else:
            return Response("False")


@api_view(['POST', 'PUT'])
def storeAnswer(request, studentID):
    if request.method == 'PUT':
        data = request.data
        user = UserAnswers.objects.get(studentID=data['studentID'])
        serializer = UserAnswersSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            calculateResult(studentID)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'POST':
        print(request.data)
        data = request.data
        serializer = UserAnswersSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            calculateResult(studentID)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def calculateResult(studentID):
    user = UserAnswers.objects.get(studentID=studentID)
    lib = 0
    cafe = 0
    seminar = 0
    dorm = 0

    if user.answer1 == 1:
        lib += 3
        cafe += 3
        seminar += 1
        dorm += 1
    elif user.answer1 == 2:
        seminar += 3
        dorm += 3

    if user.answer2 == 1:
        dorm += 6
    elif user.answer2 == 2:
        lib += 2
        cafe += 3
        seminar += 2
        dorm += 1

    if user.answer3 == 1:
        cafe += 2
        seminar += 3
        dorm += 1
    elif user.answer3 == 2:
        lib += 4
        cafe += 1
        seminar += 1
        dorm += 1

    if user.answer4 == 1:
        cafe += 3
    elif user.answer4 == 2:
        seminar += 2
        dorm += 1
    elif user.answer4 == 3:
        lib += 3
        seminar += 1
        dorm += 1

    if user.answer5 == 1:
        cafe += 4
    elif user.answer5 == 2:
        lib += 2
        seminar += 1
        dorm += 1

    if user.answer6 == 1:
        seminar += 3
    elif user.answer6 == 2:
        seminar += 3
        cafe += 2
        dorm += 1
    elif user.answer6 == 3:
        seminar += 1
        cafe += 1
        lib += 3
        dorm += 2

    if user.answer7 == 1:
        cafe += 3
        seminar += 1
        dorm += 1
    elif user.answer7 == 2:
        lib += 3

    place = ''
    maxi = 0
    if lib > maxi:
        maxi = lib
        place = '중앙 도서관'
    if cafe > maxi:
        maxi = cafe
        place = '카페'
    if seminar > maxi:
        maxi = seminar
        place = '세미나실'
    if dorm > maxi:
        maxi = dorm
        place = '기숙사 방'

    user.place = place
    user.save()


@api_view(['GET'])
def findPlace(request, studentID):
    print(request)
    if request.method == 'GET':
        user = UserAnswers.objects.get(studentID=studentID)
        myplace = user.place
        studyplace = Place.objects.get(name=myplace)
        serializer = PlaceSerializer(studyplace)
        return Response(serializer.data)


@api_view(['GET'])
def findMate(request, studentID):
    if request.method == 'GET':
        candidates = UserAnswers.objects.exclude(studentID=studentID)
        me = UserAnswers.objects.get(studentID=studentID)
        pl = me.place
        candidates = candidates.filter(place__exact=pl)
        top = 0
        mates = []
        for candidate in candidates:
            score = 0
            if me.answer1 == candidate.answer1:
                score += 1
            if me.answer2 == candidate.answer2:
                score += 1
            if me.answer3 == candidate.answer3:
                score += 1
            if me.answer4 == candidate.answer4:
                score += 1
            if me.answer5 == candidate.answer5:
                score += 1
            if me.answer6 == candidate.answer6:
                score += 1
            if me.answer7 == candidate.answer7:
                score += 1
            if score >= top:
                top = score
            mates.append([candidate.studentID, score])

        for mate in mates[:]:
            if mate[1] != top:
                mates.remove(mate)

        l = 1
        l = len(mates)
        rann = random.randrange(0, l)
        mate = mates[rann]
        stuID = int(mate[0])
        user = UserAnswers.objects.get(studentID=stuID)
        serializer = UserAnswersSerializer(user)
        return Response(serializer.data)

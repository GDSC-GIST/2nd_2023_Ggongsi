# Generated by Django 4.0.3 on 2023-01-30 12:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.CharField(blank=True, max_length=300, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quesNum', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('questionContent', models.CharField(blank=True, max_length=300, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserAnswers',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=10)),
                ('studentID', models.CharField(max_length=8)),
                ('major', models.CharField(max_length=10)),
                ('answer1', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('answer2', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('answer3', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('answer4', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('answer5', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('answer6', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('answer7', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('place', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='AnswerChoice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(blank=True, max_length=300, null=True)),
                ('quesNum', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='studymateapp.question')),
            ],
        ),
    ]

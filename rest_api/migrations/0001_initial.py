# Generated by Django 3.2.4 on 2021-06-12 10:16

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.CharField(auto_created=True, db_index=True, default=uuid.uuid4, max_length=36, primary_key=True, serialize=False)),
                ('first_name', models.TextField()),
                ('last_name', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.CharField(auto_created=True, db_index=True, default=uuid.uuid4, max_length=36, primary_key=True, serialize=False)),
                ('name', models.TextField()),
                ('isbn', models.TextField()),
                ('author', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='rest_api.author')),
            ],
        ),
    ]
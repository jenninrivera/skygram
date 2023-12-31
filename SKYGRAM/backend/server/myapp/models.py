from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save



# def file_location(instance, filename, **kwargs):
#     file_path = f"post/{instance.title}-{filename}"
#     return file_path

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    follows = models.ManyToManyField("self", related_name="followed_by", symmetrical=False, blank=True)

    def __str__(self):
        return self.user.username

def create_profile(sender, instance, created, **kwargs):
    if created:
        user_profile = Profile(user=instance)
        user_profile.save()
        user_profile.follows.set([instance.profile.id])
        user_profile.save()

post_save.connect(create_profile, sender=User)

class Post(models.Model):
    caption = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images/', null=False)
    created_at = models.DateTimeField(auto_now_add=True)

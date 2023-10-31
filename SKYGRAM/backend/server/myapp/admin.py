from django.contrib import admin
from django.contrib.auth.models import Group, User
from .models import Profile

# Unresgister Groups
admin.site.unregister(Group)

# Mix Profile info into User info
class ProfileInLine(admin.StackedInline):
    model = Profile

# Extend User Model
class UserAdmin(admin.ModelAdmin):
    model = User
    # Just dislpay username fields on admin page
    fields = ["username"]
    inlines = [ProfileInLine]

# Unregister initial User
admin.site.unregister(User)

# Reregister User and Profile
admin.site.register(User, UserAdmin)
# admin.site.register(Profile)


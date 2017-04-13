from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Count

from . import team_maker

def index(request):
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all()
	}

	print context['players'][10].num_teams
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)


	return redirect("index")

'''
*********************************************
Part Uno
*********************************************
1) "leagues": League.objects.filter(sport='Baseball')
2) "leagues": League.objects.filter(name__contains='Women'),
3) "leagues": League.objects.filter(sport__contains='Hockey'),
4) "leagues": League.objects.exclude(sport='Football'),
5) "leagues": League.objects.filter(name__contains='Conference'),
6) "leagues": League.objects.filter(name__contains='Atlantic'),
7) "teams": Team.objects.filter(location='Dallas'),
8) "teams": Team.objects.filter(team_name='Raptors'),
9) "teams": Team.objects.filter(location__contains='City'),
10) "teams": Team.objects.filter(team_name__startswith='T'),
11) "teams": Team.objects.order_by("location"),
12) "teams": Team.objects.order_by("-team_name"),
13)	players": Player.objects.filter(last_name="Cooper"),
14) "players": Player.objects.filter(first_name="Joshua"),
15) "players": Player.objects.filter(last_name="Cooper").exclude(first_name='Joshua'),
16) "players": Player.objects.filter(first_name="Alexander")| Player.objects.filter(first_name='Wyatt'),
********************************************
Part Duex
********************************************
1) "teams": Team.objects.filter(league__name__contains='Atlantic Soccer'),
2) "players": Player.objects.filter(curr_team__location='Boston')&Player.objects.filter(curr_team__team_name='Penguins'),
3) "players": Player.objects.filter(curr_team__league__name__contains='Collegiate Baseball Conference'),
4) "players": Player.objects.filter(curr_team__league__name__contains='American Conference of Amateur Football')&Player.objects.filter(last_name='Lopez'),
5) "players": Player.objects.filter(curr_team__league__sport__contains='Football'),
6) "teams": Team.objects.filter(curr_players__first_name__contains='Sophia'),
7) "leagues": League.objects.filter(teams__curr_players__first_name__contains='Sophia'),
8) "players": Player.objects.filter(last_name__contains='Flores')&Player.objects.exclude(curr_team__team_name='Roughriders'),
9) "teams": Team.objects.filter(all_players__first_name='Samuel')&Team.objects.filter(all_players__last_name='Evans'),
10) "players": Player.objects.filter(all_teams__team_name='Tiger-Cats'),
11) "players": Player.objects.filter(all_teams__team_name='Vikings')&Player.objects.exclude(curr_team__team_name='Vikings'),
12) "teams": Team.objects.filter(all_players__first_name='Jacob', all_players__last_name='Gray')&Team.objects.exclude(team_name='Colts'),
13) "players": Player.objects.filter(first_name='Joshua', all_teams__league__name='Atlantic Federation of Amateur Baseball Players')
14) "teams": Team.objects.annotate(num_players=Count('all_players')).filter(num_players__gte='12'),
15) "players": Player.objects.annotate(num_teams=Count('all_teams')).order_by('num_teams')






'''
# Using Kenobot

Kenobot is the Kenolab Discord bot. It exposes the platform through slash commands.

## Global commands

These commands work on the Kenolab Discord server and on event servers.

| Command | What it does |
|---|---|
| [`/help`](/kenobot/help) | List every available command. |
| [`/access`](/kenobot/access) | After OAuth2 login, check and claim your access to the event. |
| [`/whoami`](/kenobot/whoami) | Show your profile, stats and team. |
| [`/flag`](/kenobot/flag) | Submit a flag. |
| [`/vpn`](/kenobot/vpn) | Receive your VPN configuration file. |
| [`/leave`](/kenobot/leave) | Delete your data from the platform. |

## Event only commands

These commands only work while an event is running.

| Command | What it does |
|---|---|
| [`/team`](/kenobot/event-only/team) | View, create, join or leave a team. |
| [`/play`](/kenobot/event-only/play) | Manage your event lab instances. |

::: danger
`/leave` permanently deletes your account and progress.
:::

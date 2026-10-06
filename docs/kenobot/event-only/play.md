# /play

Start and manage your team's lab instance.

```text
/play lab_name:<lab>
```

Only works while an event is running on the server. You must have access to the event and be in a team. The lab list autocompletes with the labs available to you.

::: tip Locked labs
Some labs depend on others. Submit all flags of the prerequisite labs to unlock them.
:::

## Lab dashboard

`/play` opens a dashboard with the lab status and its buttons.

| Button | What it does |
|---|---|
| Start Lab | Start an instance of the lab for your team. |
| Stop Lab | Stop your team's instance. |
| Reset Lab | Reset the lab machines to their initial state. A cooldown applies between resets. |
| Add time | Extend the lifetime of your instance. |
| Refresh info | Update the dashboard, for example while the instance is booting. |

Once the instance is running, the dashboard shows the IP addresses of the lab machines. Connect to them through the [VPN](/vpn/).

::: info
The instance is shared by your whole team and expires after a while. Use **Add time** to keep it running.
:::

If all instances are occupied, wait a few minutes: freed instances need a short cooldown before they are available again.

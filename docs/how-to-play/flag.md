# Flag Strategy

Kenolab uses a consistent flag system across its labs. The exact location of a flag depends on whether you are playing a **Standalone** lab or a **Chain**.

## Standalone Labs

In Standalone labs, flags are generally located in standard locations depending on the operating system.

### Linux

The flag is usually located in the home directory of the compromised user:

```text
/home/<USER>/user.txt
```

### Windows

The flag is usually located on the compromised user's desktop:

```text
C:\Users\<USERNAME>\Desktop\user.txt
```

::: info Exceptions
Some challenges may use a different flag location.
:::

Unless explicitly stated otherwise in the challenge description, **you do not need to search the entire machine**. The flag will always be somewhere along the intended exploitation path.

## Chains

Chain labs work differently. Since they involve multiple machines, users, and attack paths, flags do not have a predefined location.

The flag file will always be named:

```text
flag.txt
```

This applies to both **Linux and Windows machines**.

The flag will always be located somewhere accessible from the **home directory of a compromised user**.

::: tip
If you have successfully compromised a new user or machine during a Chain, checking the user's home directory is a good place to start.
:::

## Flag Format

Kenolab flags use the following format:

```text
KENO{...}
```

Depending on the challenge, the content can be a readable value:

```text
KENO{Some_kenofun_here}
```

Or a SHA-256 hash:

```text
KENO{e3b0c44298fc1c149afbf4c8996fb924...}
```

When you find a flag, submit the **entire value including `KENO{}`**.
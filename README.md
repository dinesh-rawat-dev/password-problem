# password-problem

Some computer programs try to prevent easily guessable passwords being used, by rejecting those that do not meet some simple rules. One simple rule is to reject passwords which contain any sequence of letters immediately followed by the same sequence. For example:


```sh
APPLE      Rejected  (P is repeated)
CUCUMBER   Rejected  (CU is repeated)
ONION      Accepted  (ON is not immediately repeated)
APRICOT    Accepted
```

#!/bin/dash

count=0
while [ "$count" -le 13 ];
do
    mkdir "part$count"
    count="$((count + 1))"
done
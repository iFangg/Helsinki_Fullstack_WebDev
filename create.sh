#!/bin/bash

count=2
while [ "$count" -le 13 ];
do
    mkdir "part$count"
    count="$((count + 1))"
done

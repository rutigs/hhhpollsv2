until python pushbullet.py; do
    echo "'pushbullet.py' crashed with exit code $?. Restarting..." >&2
    sleep 1
done

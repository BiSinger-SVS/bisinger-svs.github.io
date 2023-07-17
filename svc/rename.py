import os

directory = '.'

for filename in os.listdir(directory):
    if filename.endswith('.wav'):
        new_filename = filename.replace('#', '|')
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_filename)
        os.rename(old_path, new_path)

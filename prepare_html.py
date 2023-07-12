import os

# load the phonemes
def load_phonemes():
    phonemes = {}
    for lang in ['cn', 'en', 'mix']:
        with open(f'bisinger_mos_normalized/{lang}.txt', 'r') as f:
            for i, line in enumerate(f.readlines()):
                parts = line.strip().split('<AP>')
                phonemes[f'{i}' + lang] = parts[1]
    return phonemes

# generate the html for a single wav file
def generate_html_for_wav(filename, phonemes, lang):
    id_, part, lyrics = filename.split('|')
    lyrics = lyrics.split('.')[0][2:-2] # removing the 'AP' prefix and suffix and the '.wav'
    if part != 'Tenor-1':
        return ''
    phoneme = phonemes.get(id_ + lang, '')
    return f'''
        <p class="title is-5" style="font-weight: bold; color: #209cee;">
          Lyrics: <span style="font-size: 1.25em;">{lyrics}</span>
        </p>
        <p class="title is-5" style="font-weight: bold; color: #209cee;">
          Phonemes: <span style="font-size: 1.25em;">{phoneme}</span>
        </p>
        <table class="table is-fullwidth" style="table-layout: fixed;">
          <tr>
            <th>Ground Truth (Converted)</th>
            <th>BiSinger (NUS+DB4)</th>
            <th>BiSinger (NUS)</th>
            <th>BiSinger (DB4)</th>
            <th>DiffSinger (CMU)</th>
          </tr>
          <tr>
            <td>
              <audio controls style="width: 100%;">
                <source src="bisinger_mos_normalized/system-gt/{lang}/{filename}" type="audio/wav">
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <audio controls style="width: 100%;">
                <source src="bisinger_mos_normalized/system-4/{lang}/{filename}" type="audio/wav">
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <audio controls style="width: 100%;">
                <source src="bisinger_mos_normalized/system-2/{lang}/{filename}" type="audio/wav">
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <audio controls style="width: 100%;">
                <source src="bisinger_mos_normalized/system-3/{lang}/{filename}" type="audio/wav">
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <audio controls style="width: 100%;">
                <source src="bisinger_mos_normalized/system-0/{lang}/{filename}" type="audio/wav">
                Your browser does not support the audio element.
              </audio>
            </td>
          </tr>
        </table>
    '''

def main():
    # load the phonemes
    phonemes = load_phonemes()

    # go through all the files and generate the html
    html = ''
    for root, dirs, files in os.walk('bisinger_mos_normalized/system-gt'):
        for lang in dirs:
            for file in sorted(os.listdir(os.path.join(root, lang)), key=lambda x: int(x.split('|')[0])):
                if file.endswith('.wav'):
                    html += generate_html_for_wav(file, phonemes, lang)

    # write the html to a file
    with open('output.html', 'w') as f:
        f.write(html)

if __name__ == '__main__':
    main()

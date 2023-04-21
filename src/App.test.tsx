import { render, screen } from '@testing-library/react';
import App from './App';

async function expectText(text: string) {
  const result = await screen.findAllByText(text, {exact: false});
  expect(result[0]).toBeInTheDocument();
}

describe('renders the manifest list', () => {

  it('should include all NAME values', async () => {
    render(<App />);
    await expectText('720');
    await expectText('240');
    await expectText('380');
    await expectText('480');
    await expectText('1080');
  });

  it('should include all BANDWIDTH values', async () => {
    render(<App />);
    await expectText('2149280');
    await expectText('246440');
    await expectText('460560');
    await expectText('836280');
    await expectText('6221600');
  });

  it('should include all CODECS values', async () => {
    render(<App />);
    await expectText('mp4a.40.2,avc1.64001f');
    await expectText('mp4a.40.5,avc1.42000d');
    await expectText('mp4a.40.5,avc1.420016');
    await expectText('mp4a.40.2,avc1.640028');
  });

  it('should include all RESOLUTION values', async () => {
    render(<App />);
    await expectText('1280');
    await expectText('320');
    await expectText('512');
    await expectText('848');
    await expectText('1920');
  });

  it('should include all URI values', async () => {
    render(<App />);
    await expectText('url_0/193039199_mp4_h264_aac_hd_7.m3u8');
    await expectText('url_2/193039199_mp4_h264_aac_ld_7.m3u8');
    await expectText('url_4/193039199_mp4_h264_aac_7.m3u8');
    await expectText('url_6/193039199_mp4_h264_aac_hq_7.m3u8');
    await expectText('url_8/193039199_mp4_h264_aac_fhd_7.m3u8');
  });

  it('should include the PROGRAM-ID value', async () => {
    render(<App />);
    await expectText('1');
  });
});

/*
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2149280,CODECS="mp4a.40.2,avc1.64001f",RESOLUTION=1280x720,NAME="720"
url_0/193039199_mp4_h264_aac_hd_7.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=246440,CODECS="mp4a.40.5,avc1.42000d",RESOLUTION=320x184,NAME="240"
url_2/193039199_mp4_h264_aac_ld_7.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=460560,CODECS="mp4a.40.5,avc1.420016",RESOLUTION=512x288,NAME="380"
url_4/193039199_mp4_h264_aac_7.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=836280,CODECS="mp4a.40.2,avc1.64001f",RESOLUTION=848x480,NAME="480"
url_6/193039199_mp4_h264_aac_hq_7.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=6221600,CODECS="mp4a.40.2,avc1.640028",RESOLUTION=1920x1080,NAME="1080"
url_8/193039199_mp4_h264_aac_fhd_7.m3u8
*/

import { render, screen } from '@testing-library/react';
import App from './App';

function expectText(text: string) {
  const result = screen.getByText(text);
  expect(result).toBeInTheDocument();
}

test('renders the manifest list', () => {
  render(<App />);

  // Name
  expectText('720');
  expectText('240');
  expectText('380');
  expectText('480');
  expectText('1080');
  
  // Bandwidth
  expectText('2149280');
  expectText('246440');
  expectText('460560');
  expectText('836280');
  expectText('6221600');

  // Codec
  expectText('mp4a.40.2,avc1.64001f');
  expectText('mp4a.40.5,avc1.42000d');
  expectText('mp4a.40.5,avc1.420016');
  expectText('mp4a.40.2,avc1.640028');

  // Resolution
  expectText('1280');
  expectText('320');
  expectText('512');
  expectText('848');
  expectText('1920');
});

/**
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

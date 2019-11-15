import sys
import os

if sys.version_info < (3,):
    import SimpleHTTPServer as server
    import SocketServer as socketserver
    import urlparse as parse
else:
    from http import server
    from urllib import parse
    import socketserver

PORT = 8888
INDEXFILE = 'index.html'


class MyHandler(server.SimpleHTTPRequestHandler):
    def do_GET(self):

        # Parse query data to find out what was requested
        parsedParams = parse.urlparse(self.path)

        # See if the file requested exists
        if os.access('.' + os.sep + parsedParams.path, os.R_OK):
            # File exists, serve it up
            server.SimpleHTTPRequestHandler.do_GET(self)
        else:
            # send index.html, but don't redirect
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            with open(INDEXFILE, 'rb') as fin:
                self.copyfile(fin, self.wfile)


if __name__ == "__main__":

    args = sys.argv[1:]

    if len(args) > 0:
        PORT = int(args[0])
    os.chdir('dist')
    Handler = MyHandler

    httpd = socketserver.TCPServer(("", PORT), Handler)

    sys.stdout.write("serving at http://0.0.0.0:%s/ \n" % PORT)
    httpd.serve_forever()

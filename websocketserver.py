import asyncio
import websockets
import cv2 as cv
import binascii
import numpy as np
USERS = []
async def recv_msg(websocket):
    USERS.append(websocket)
    print('user',USERS,len(USERS))
    while True:
        try:
            recv_text = await websocket.recv()
            # print(recv_text.hex())
            data = binascii.a2b_hex(recv_text.hex())
            data1 = np.frombuffer(data, dtype=np.uint8)
            img = cv.imdecode(data1, 1)
            cv.imshow('result', img)
            cv.waitKey(1)
            if len(USERS) >= 2:
                await USERS[len(USERS)-1].send(data)
                # print(USERS[1])
        finally:
            pass
async def main_logic(websocket, path):
    await recv_msg(websocket)

# 把ip换成自己本地的ip
start_server = websockets.serve(main_logic, "192.168.31.181",5765)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

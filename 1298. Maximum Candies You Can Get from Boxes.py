# https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/
from typing import List


class Solution:
    def maxCandies(self, status: List[int],
                   candies: List[int],
                   keys: List[List[int]],
                   containedBoxes: List[List[int]],
                   initialBoxes: List[int]) -> int:

        collected_candies = 0
        for big_box_index in range(0, len(initialBoxes)):
            # ARRAY of boxes (indices of boxes)
            small_contained_boxes = containedBoxes[big_box_index]
            big_box_status = status[big_box_index]
            big_box_candies = candies[big_box_index]

            print(big_box_status)
            # ? box is open
            if big_box_status == 1:
                print(f"- Status = {big_box_status} [OPEN]")
                # colllect candies if the box is open
                collected_candies += big_box_candies
            else:
                print(f"- Status = {big_box_status} [CLOSED]")
                    
            for c_box_array_index, c_box_index in enumerate(small_contained_boxes):
                print(c_box_array_index,c_box_index)
                box_status = status[c_box_index]
                box_candies = candies[c_box_index]
                # ARRAY contains the indices of the boxes you can open with the key
                print(f'Box Index = {c_box_index}')
                print(f"- Candies {box_candies}")
                # ? box is open
                if box_status == 1:
                    print(f"- Status = {box_status} [OPEN]")
                    # colllect candies if the box is open
                    collected_candies += box_candies
                else:
                    print(f"- Status = {box_status} [CLOSED]")

                for box_key_index in keys:
                    if c_box_index in box_key_index:
                        box_candies_by_key = candies[c_box_index]
                        print(
                            f"- Box <{box_key_index}> key found, Additional Candies = {box_candies_by_key}")
                        collected_candies += box_candies_by_key

        print(f"Collected Candies = {collected_candies}")
        return collected_candies


# status = [1, 0, 1, 0]
# candies = [7, 5, 4, 100]
# keys = [[], [], [1], []]
# containedBoxes = [[1, 2], [3], [], []]
# initialBoxes = [0]
status = [1,0,0,0,0,0]
candies = [1,1,1,1,1,1]
keys = [[1,2,3,4,5],[],[],[],[],[]]
containedBoxes = [[1,2,3,4,5],[],[],[],[],[]]
initialBoxes = [0]

Solution().maxCandies(status, candies, keys, containedBoxes, initialBoxes)
#  for index in range(0, len(initialBoxes)):
#             box = initialBoxes[index]  # box given
#             box_status = status[index]# determines if the box is closed or open - 0 or 1
#             contained_boxes = containedBoxes[index]  # array of boxes
#             box_candies = candies[index]  # candies for the intial box given
#             for c_box in contained_boxes:
#                 # determines if the box is closed or open - 0 or 1
#                 c_box_status = status[c_box]
#                 # check if that box has any keys to other boxes
#                 c_box_keys = keys[c_box]
#                 print(f"contained_box : {c_box}, status = {c_box_status}")
#                 if c_box_status == 1:  # if the box is open
#                     c_box_candies = candies[c_box]
#                     print(f" - c_box_candies: {c_box_candies}")
#                 else:
#                     print(f" - closed box")
#                 print(f" - keys: {c_box_keys}")
#             # print(box, box_candies, containedBox)

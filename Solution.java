/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {
    public class ListNode {
        int val;
        ListNode next;

        ListNode(int x) {
            val = x;
        }
    }

    public ListNode main(ListNode head) {
        ListNode Node = new ListNode(3);
        System.out.print(Node);
        return Node;
    }

    // public static void main(String[] args) {
    // ListNode Node = new ListNode(3);
    // System.out.print(Node);
    // }
}
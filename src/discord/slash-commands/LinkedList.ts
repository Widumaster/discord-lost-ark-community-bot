class Node<TGroup> {
    constructor(public data: TGroup) {}
    public next: Node<TGroup> | null = null;
}

export class LinkedList<TGroup> {
    private first: Node<TGroup> | null = null;
    comparator: (a: TGroup, b: TGroup) => boolean;

    public insertFirst(data: TGroup): Node<TGroup> {
        const node = new Node(data);
        if (!this.first) {
            this.first = node;
        } else {
            node.next = this.first;
            this.first = node;
        }
        return node;
    }

    public insertLast(data: TGroup): Node<TGroup> {
        const node = new Node(data);
        if (!this.first) {
            this.first = node;
        } else {
            const getLast = (node: Node<TGroup>): Node<TGroup> => {
                return node.next ? getLast(node.next) : node;
            };

            const lastNode = getLast(this.first);
            lastNode.next = node;
        }
        return node;
    }

    public addMember(data: TGroup): void {
        if (!this.first) {
            this.first = new Node(data);
        } else {
            let current = this.first;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new Node(data);
        }
    }

    public deleteMember(data: TGroup): void {
        if (!this.first) return;

        if (this.comparator(this.first.data, data)) {
            this.first = this.first.next;
            return;
        }
        let current = this.first.next;
        let previous = this.first;

        while (current) {
            if (this.comparator(current.data, data)) {
                current = null;
            } else {
                previous = current;
                current = current.next;
            }
        }
        previous.next = previous.next ? previous.next.next : null;
    }

    public getAllMember(): TGroup[] {
        const array: TGroup[] = [];
        if (!this.first) {
            return array;
        }

        const addToArray = (node: Node<TGroup>): TGroup[] => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.first);
    }

    public memberCount(): number {
        return this.getAllMember().length;
    }

    public searchmember(comparator: (data: TGroup) => boolean): Node<TGroup> | null {
        const checkNext = (node: Node<TGroup>): Node<TGroup> | null => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };

        return this.first ? checkNext(this.first) : null;
    }
}

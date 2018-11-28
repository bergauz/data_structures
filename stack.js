'use strict';

class Stack {
	constructor() {
		this._items = [];
		this._size = 0;
	}

	get size() {
		return this._size;
	}

	pop() {
		if (!this.size) return null;
		this._size--;
		return this._items.splice(this.size - 1, 1);
	}

	push(item) {
		this._items[this.size] = item;
		this._size++;
		return true;
	}

	peek() {
		if (!this.size) return null;
		return this._items[this.size - 1];
	}

	isEmpty() {
		return !!this.size
	}
}
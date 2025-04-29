class Pagination {
  constructor(
    public page: number,
    public pageSize: number,
    public total: number,
    public isCircular: boolean = false
  ) {
    this.page = page;
    this.pageSize = pageSize;
    this.total = total;
    this.isCircular = isCircular;
  }

  getTotalPages() {
    return Math.ceil(this.total / this.pageSize);
  }

  getNextPage() {
    if (this.isCircular) {
      return this.page === this.getTotalPages() ? 1 : this.page + 1;
    }
    return this.page === this.getTotalPages() ? this.page : this.page + 1;
  }

  getPreviousPage() {
    if (this.isCircular) {
      return this.page === 1 ? this.getTotalPages() : this.page - 1;
    }
    return this.page === 1 ? 1 : this.page - 1;
  }

  getFirstPage() {
    return 1;
  }

  getLastPage() {
    return this.getTotalPages();
  }

  getPages() {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  getPageRange() {
    return {
      start: this.getFirstPage(),
      end: this.getLastPage(),
    };
  }

  canGoNext() {
    return this.isCircular || this.page < this.getTotalPages();
  }

  canGoPrevious() {
    return this.isCircular || this.page > 1;
  }

  jumpForward(pages: number) {
    if (this.isCircular) {
      return ((this.page + pages - 1) % this.getTotalPages()) + 1;
    }
    return Math.min(this.page + pages, this.getTotalPages());
  }

  jumpBackward(pages: number) {
    if (this.isCircular) {
      return ((this.page - pages - 1 + this.getTotalPages()) % this.getTotalPages()) + 1;
    }
    return Math.max(this.page - pages, 1);
  }
}

export default Pagination;
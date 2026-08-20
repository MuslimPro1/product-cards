export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeBtn = this.modal.querySelector('.modal__close');

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this.close.bind(this));
    }

    if (this.modal) {
      this.modal.addEventListener('click', this.handleOverlayClick.bind(this));
    }
  }

  open() {
    this.modal.classList.add('modal-showed');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('modal-showed');
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}

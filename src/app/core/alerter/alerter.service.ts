import { Injectable } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';
import swal from 'sweetalert2';

@Injectable()
export class AlerterService {

    constructor() { }

    showSuccessAlert(title, message) {
        swal(title, message, 'success');
    }

    showWarningAlert(title, message) {
        swal(title, message, 'warning');
    }

    showErrorAlert(title, message) {
        swal(title, message, 'error');
    }

    showOrderSuggestion(id, name, imageUrl) {
        return new Promise((resolve, reject) => {
            swal({
                title: 'Order pizza?',
                text: `Do you want to order ${name}?`,
                imageUrl,
                confirmButtonColor: '#40A104',
                confirmButtonText: 'Yes, order it!',
                cancelButtonText: 'Cancel',
                showCancelButton: true,
                showLoaderOnConfirm: true,
                allowOutsideClick: false,
                preConfirm: () => {
                    return new Promise((res) => setTimeout(() => res(), 500));
                },
            }).then(() => {
                resolve(id);
            }, () => {
                reject();
            });
        });
    }
}

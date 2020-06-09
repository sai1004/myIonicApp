import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async showLoader(show: boolean) {
    console.log("show loader:", show);
    if (show) {
      const loading = await this.loadingController.create({
        message: "Please wait...",
        duration: 200000,
      });
      await loading.present();
    } else {
      await this.loadingController.dismiss();
    }
  }

  async showMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    await toast.present();
  }
}
